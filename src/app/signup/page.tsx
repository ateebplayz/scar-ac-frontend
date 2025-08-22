"use client"
import "../globals.css";
import {Header} from "@/components/items/header";
import {Label} from "@/components/ui/label";
import {InputAlt} from "@/components/ui/input_alt";
import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";

export default function Signup() {
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
          <h1 className={'text-4xl mb-4 font-medium text-white'}>Create Your Account</h1>
          <h1 className={'max-w-[300px] font-medium text-primary-foreground text-center'}>Join thousands building their digital presence in one simple link.</h1>
          <div className={'w-full flex flex-col justify-start mt-12 items-start gap-6'}>
            <div className={'flex w-full flex-col justify-start items-start gap-2'}>
              <Label htmlFor={"username"}>Username</Label>
              <InputAlt id={'username'} placeholder={'Enter your username'}/>
            </div>
            <div className={'flex w-full flex-col justify-start items-start gap-2'}>
              <Label htmlFor={"email"}>Email</Label>
              <InputAlt id={'email'} placeholder={'Enter your email'}/>
            </div>
            <div className={'flex w-full flex-col justify-start items-start gap-2'}>
              <Label htmlFor={"password"}>Password</Label>
              <InputAlt id={'password'} type={'password'} placeholder={'Enter your password'}/>
            </div>
            <div className={'flex w-full flex-col justify-start items-start gap-2'}>
              <Label htmlFor={"confirm_password"}>Confirm Password</Label>
              <InputAlt id={'confirm_password'} type={'password'} placeholder={'Confirm your password'}/>
            </div>
            <div className={'flex w-full flex-col justify-start items-start gap-2'}>
              <Label htmlFor={"url"}>Custom URL</Label>
              <div id={'url'} className="relative w-full">
                <InputAlt
                  className="rounded-r-none w-full pl-16 text-primary-foreground"
                  placeholder="customurl"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm pointer-events-none">
                  scar.ac/
                </span>
              </div>
            </div>
          </div>
          <button className="gradient-border mt-6 w-full transition duration-500 hover:opacity-50 cursor-pointer">
            <span onClick={() => router.push('/dashboard')} className="gradient-content w-full text-sm">
              Sign up
            </span>
          </button>
          <h1 className={'font-medium mt-6 text-sm'}>Already have an account? <span
            className={'text-primary underline transition duration-500 hover:opacity-50 cursor-pointer'} onClick={() => router.push('/login')}>Sign in here</span>
          </h1>
        </div>
      </div>
    </div>
  );
}