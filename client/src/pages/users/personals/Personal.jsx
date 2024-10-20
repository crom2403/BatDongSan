import { FormInput } from "@/components/forms"
import { ConditionRender, Section } from "@/components/layouts"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import useMeStore from "@/zustand/useMeStore"
import { zodResolver } from "@hookform/resolvers/zod"
import { FilePenLine } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  email: z.string().optional(),
  phone: z.string().optional,
  fullname: z.string().min(1, { message: "Trường này là bắt buộc." }),
  avatar: z.array(z.string().url({ message: "Link avatar không hợp lệ." })),
  balance: z.number(),
  score: z.number(),
})

const Personal = () => {
  const { me } = useMeStore()
  const form = useForm({
    defaultValues: {
      email: "",
      phone: "",
      fullname: "",
      avatar: [me.avatar],
      balance: me.balance || 0,
      score: me.score || 0,
    },
    resolver: zodResolver(FormSchema),
  })

  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    if (me) {
      form.reset({
        email: me.email || "",
        phone: me.phone || "",
        fullname: me.fullname || "",
        avatar: [],
        balance: 0,
        score: 0,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me])

  return (
    <div className="w-[700px] max-w-full m-auto">
      <Section title="Thông tin cá nhân">
        <Form {...form}>
          <form className="grid grid-cols-10 gap-4">
            <div className="col-span-7 space-y-4">
              <FormInput readOnly={!isEdit} form={form} label="Tên đầy đủ" name="fullname" />
              <FormInput readOnly={true} form={form} label="Email" name="email" />
              <FormInput readOnly={true} form={form} label="Số điện thoại" name="phone" />
              <FormInput readOnly={true} form={form} label="Số dư tài khoản" name="balance" />
              <FormInput readOnly={true} form={form} label="Điểm tích lũy" name="score" />
              <ConditionRender show={!isEdit}>
                <Button onClick={() => setIsEdit(true)} variant="outline">
                  <FilePenLine size={16} />
                  <span>Cập nhật thông tin</span>
                </Button>
              </ConditionRender>
              <ConditionRender show={isEdit}>
                <div className="flex items-center gap-4">
                  <Button>Cập nhật</Button>
                  <Button
                    onClick={() => setIsEdit(false)}
                    className="bg-orange-600 hover:bg-orange-600/90"
                  >
                    Hủy bỏ
                  </Button>
                </div>
              </ConditionRender>
            </div>
          </form>
        </Form>
      </Section>
    </div>
  )
}

export default Personal
