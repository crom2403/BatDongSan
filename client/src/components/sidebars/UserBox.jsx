import useMeStore from "@/zustand/useMeStore"
import { CustomTooltip, Image } from "../layouts"
import { generateDefaultAvatar } from "@/lib/utils"
import { Info } from "lucide-react"

const UserBox = () => {
  const { me } = useMeStore()
  return (
    <div className="p-4 flex items-center gap-2">
      <div className="relative">
        <Image
          src={me.avatar}
          fallbackSrc={generateDefaultAvatar(me.fullname)}
          className="w-24 h-24 object-cover rounded-full border-2 border-slate-200"
        />
        <div className="absolute bg-white rounded-full bottom-1 right-1">
          <Image
            src="/svg/badge-stock/dinamond.svg"
            className="size-6 object-cover border-2 border-slate-200 p-[2px] rounded-full"
          />
        </div>
      </div>
      <div>
        <p className="font-bold mb-2">{me.fullname}</p>
        <p className="flex items-center gap-2">
          <span>Điểm:</span>
          <span>{me.score}</span>
          <CustomTooltip
            trigger={<Info size={16} />}
            content={
              <>
                <p>
                  <span>Hạng tài khoản: </span>
                  <span>Kim cương</span>
                </p>
                <p>Cần tích lũy thêm 1000 điểm để lên level tiếp theo</p>
              </>
            }
          />
        </p>
        <p className="flex items-center gap-2">
          <span>Số dư TK:</span>
          <span>{me.balance}</span>
        </p>
      </div>
    </div>
  )
}

export default UserBox
