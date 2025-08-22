import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export function Header() {
  const router = useRouter();
  return <div className={'flex justify-end items-center px-32 absolute top-0 w-full py-12 z-30'}>
    <div className={'flex justify-center h-full items-center'}>
      <Button variant={'ghost'} className={'rounded-full mr-2'} onClick={() => router.push('/login')}>
        Sign in
      </Button>
      <button className="gradient-border transition duration-500 hover:opacity-50 cursor-pointer" onClick={() => router.push('/signup')}>
        <span className="gradient-content text-sm">
          Sign up
        </span>
      </button>
    </div>
  </div>
}