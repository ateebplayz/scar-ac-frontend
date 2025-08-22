"use client"
import "../globals.css";
import {Header} from "@/components/items/header";
import {Label} from "@/components/ui/label";
import {InputAlt} from "@/components/ui/input_alt";
import {useRouter} from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="">
      <Header/>
      <img
        className="absolute w-[1307.39px] h-[1307.39px] opacity-50 rotate-180 right-[-114.05px] pointer-events-none bottom-[18.61px] z-10"
        src={"/orbs/Red_Orb_1.png"}
      />
      <img
        className="absolute w-[1307.39px] h-[1307.39px] opacity-50 left-[-114.05px] pointer-events-none top-[18.61px] z-10"
        src={"/orbs/Red_Orb_1.png"}
      />

      <div
        className="flex justify-center z-20 items-center min-h-screen flex-col bg-[url(/backgrounds/Hero_Overlay.png)] bg-no-repeat z-30">
        <div className={'w-1/3 flex flex-col justify-center items-center'}>
          <h1 className={'text-4xl mb-4 font-medium text-white'}>Welcome Back</h1>
          <h1 className={'max-w-[300px] font-medium text-primary-foreground text-center'}>Log in to access your
            dashboard and manage everything in one place.</h1>
          <div className={'w-full flex flex-col justify-start mt-12 items-start gap-6'}>
            <div className={'flex w-full flex-col justify-start items-start gap-2'}>
              <Label htmlFor={"email"}>Username / EMail</Label>
              <InputAlt id={'email'} placeholder={'Enter your username/email'}/>
            </div>
            <div className={'flex w-full flex-col justify-start items-start gap-2'}>
              <Label htmlFor={"password"}>Password</Label>
              <InputAlt id={'password'} type={'password'} placeholder={'Enter your password'}/>
            </div>
          </div>
          <div className={'flex justify-end w-full mt-2 items-end'}>
            <h1
              className={'font-medium text-primary-foreground text-sm transition duration-500 hover:opacity-50 cursor-pointer'}>Forgot
              Password?</h1>
          </div>
          <button className="gradient-border mt-6 w-full transition duration-500 hover:opacity-50 cursor-pointer">
            <span onClick={() => router.push('/dashboard')} className="gradient-content w-full text-sm">
              Sign in
            </span>
          </button>
          <h1 className={'font-medium mt-6 text-sm'}>New to scar.ac? <span
            className={'text-primary underline transition duration-500 hover:opacity-50 cursor-pointer'} onClick={() => router.push('/signup')}>Sign up here</span>
          </h1>
        </div>
      </div>
    </div>
  );
}