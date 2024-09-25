import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import { FormInput } from "@/components/forms"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useGoogleLogin } from "@react-oauth/google"
import { apiGetCredentialsFromAccessToken } from "@/apis/externals"
import { apiCheckNewUser } from "@/apis/auth"
import SetupPassword from "./SetupPassword"
import useMeStore from "@/zustand/useMeStore"
import PropTypes from "prop-types"
import { toast } from "sonner"

const formChema = z.object({
  emailOrPhone: z.string().min(1, { message: "Trường này là bắt buộc." }),
  password: z.string().min(6, { message: "Mật khẩu tối thiểu 6 kí tự." }),
  fullname: z.string().min(1, { message: "Trường này là bắt buộc." }), // min là bắt buộc tối thiểu 1 kí tự
})

const Login = ({ onClose }) => {
  const form = useForm({
    resolver: zodResolver(formChema),
    defaultValues: {
      emailOrPhone: "",
      password: "",
      fullname: "",
    },
  })

  const [variant, setVariant] = useState("SIGNIN")
  const [isSetupPassword, setIsSetupPassword] = useState(false)
  const { setToken } = useMeStore()
  const { setGoogleData } = useMeStore()
  setGoogleData
  const toggleVariant = () => {
    if (variant === "SIGNIN") setVariant("SIGNUP")
    else setVariant("SIGNIN")
  }

  const handleSignInGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const response = await apiGetCredentialsFromAccessToken(tokenResponse.access_token)
      console.log(response)
      if (response.status === 200) {
        setGoogleData({
          email: response.data.email,
          avatar: response.data.picture,
          fullname: response.data.name,
          emailVerified: response.data.verified_email,
        })
        const user = await apiCheckNewUser(response.data.email)
        console.log(user)

        if (user.data.hasUser) {
          // Redirect home + Save accessToken
          setToken(user.data.accessToken)
          toast.success(user.data.msg)
          onClose()
        } else {
          // Show popup để add password
          setIsSetupPassword(true)
        }
      }
    },
    onError: (err) => {
      console.log(err)
      toast.error("Đăng nhập không thành công.")
    },
  })

  return (
    <div className="grid grid-cols-10 ">
      <div className="col-span-4 grid place-content-center">
        <img src="/jpg/banner-login.jpg" alt="login" className="w-full object-contain" />
      </div>
      {!isSetupPassword && (
        <div className="col-span-6 p-8">
          <p className="font-bold text-base">Xin chào bạn</p>
          <p className="font-bold text-2xl">
            {variant === "SIGNIN" ? "Đăng nhập để tiếp tục" : "Đăng ký tài khoản mới"}
          </p>
          <Form {...form}>
            <form className="my-6 space-y-4" method="post">
              <FormInput
                form={form}
                name="emailOrPhone"
                label="Email hoặc số điện thoại"
                placeholder="VD: 0123456789 hoặc user@example.com"
              />
              <FormInput
                form={form}
                type="password"
                name="password"
                label="Mật khẩu"
                placeholder="Mật khẩu có tối thiểu 6 kí tự"
              />
              {variant === "SIGNUP" && (
                <FormInput
                  form={form}
                  type="text"
                  name="fullname"
                  label="Tên đầy đủ của bạn"
                  placeholder="Nguyễn Văn A"
                />
              )}
              {variant === "SIGNIN" ? (
                <Button size="default" className="w-full relative top-2">
                  Đăng nhập
                </Button>
              ) : (
                <Button size="default" className="w-full relative top-2">
                  Đăng Ký
                </Button>
              )}
            </form>
          </Form>
          <div className="w-full h-6 flex items-center relative mb-4">
            <div className="w-full h-[1px] bg-stone-200"></div>
            <div className="absolute inset-0 bg-transparent">
              <p className="px-2 bg-white mx-auto w-fit text-primary text-sm">Hoặc</p>
            </div>
          </div>
          <Button onClick={handleSignInGoogle} size="lg" variant="outline" className="w-full mb-4">
            <img src="/svg/google.svg" alt="Google" className="size-5 object-cover" />
            <span>Đăng nhập bằng Google</span>
          </Button>
          <p className="text-center text-sm">
            {variant === "SIGNIN" ? (
              <span>Bạn chưa là thành viên? </span>
            ) : (
              <span>Bạn đã có tài khoản? </span>
            )}
            <span
              onClick={toggleVariant}
              className="text-red-600 font-bold cursor-pointer hover:underline"
            >
              {variant === "SIGNIN" ? "Đăng ký" : "Đăng nhập"}
            </span>
            <span> tại đây</span>
          </p>
        </div>
      )}
      {isSetupPassword && <SetupPassword onClose={onClose} />}
    </div>
  )
}

export default Login

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
}
