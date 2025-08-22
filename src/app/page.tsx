"use client"
import { IoIosPeople } from "react-icons/io";
import "./globals.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import { motion } from 'framer-motion'
import {LuAward, LuDiamond, LuEarth, LuPaintbrush} from "react-icons/lu";
import {CgMusicNote} from "react-icons/cg";
import {GiSettingsKnobs} from "react-icons/gi";
import {IoBarChartOutline, IoDiamondOutline} from "react-icons/io5";
import {TbTargetArrow} from "react-icons/tb";
import {FaDotCircle} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";
import {CiDesktopMouse2} from "react-icons/ci";

export default function Home() {
  return (
    <div className="">
      <img
        className="absolute w-[1307.39px] h-[1307.39px] left-[-114.05px] pointer-events-none top-[18.61px] z-10"
        src={"/orbs/Red_Orb_1.png"}
      />
      <div className={'flex justify-end items-center px-32 absolute top-0 w-full py-12 z-30'}>
        <div className={'flex justify-center h-full items-center'}>
          <Button variant={'ghost'} className={'rounded-full mr-2'}>
            Sign in
          </Button>
          <button className="gradient-border transition duration-500 hover:opacity-50 cursor-pointer">
            <span className="gradient-content text-sm">
              Sign up
            </span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="flex justify-center items-center min-h-screen flex-col bg-[url(/backgrounds/Hero_Overlay.png)] bg-no-repeat z-30">
        <div className="gradient-border mb-4">
          <span className="gradient-content text-sm">
            <IoIosPeople size={24} className={"mr-2"}/>
            Trusted by creators worldwide
          </span>
        </div>
        <h1 className={"text-5xl font-medium mt-4 z-30"}>
          Create Your <span className={"text-primary"}>All-in-One</span> Bio Link
        </h1>
        <h1 className={"mt-4 w-1/3 text-xl text-center text-primary-foreground z-30"}>
          Combine your social profiles, content, and links into one easy,
          shareable page.
        </h1>

        <div className="flex flex-row py-4 mt-8 justify-center items-stretch z-30">
          <div className="relative">
            <Input
              className="rounded-r-none w-64 pl-16 text-primary-foreground"
              placeholder="yourcustomurl"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm pointer-events-none">
              scar.ac/
            </span>
          </div>
          <Button className="rounded-l-none h-10">Create my link</Button>
        </div>

        <div className={'flex justify-center items-center z-30 flex-row gap-12 mt-8'}>
          <h1 className={'font-medium text-muted'}>
            <span className={'text-white mr-1'}>27K+</span>
            Active users
          </h1>
          <h1 className={'font-medium text-muted'}>
            <span className={'text-white mr-1'}>39K+</span>
            Links created
          </h1>
          <h1 className={'font-medium text-muted'}>
            <span className={'text-white mr-1'}>8M+</span>
            Total views generated
          </h1>
          <h1 className={'font-medium text-muted'}>
            <span className={'text-white mr-1'}>150+</span>
            Integrations available
          </h1>
        </div>

        <div className={'flex animate-up-down z-30 justify-center absolute bottom-12 items-center flex-col'}>
          <CiDesktopMouse2 size={32} className={'text-primary'}/>
          <h1 className={'mt-2 text-xs'}>Scroll Down</h1>
        </div>
      </div>

      {/* Smart Tools Section */}
      <div
        className="flex justify-center items-center flex-col bg-no-repeat z-30 px-24">
        <div className="gradient-border mb-4">
          <span className="gradient-content text-sm">
            Smart Tools
          </span>
        </div>
        <h1 className={"text-5xl font-medium z-30"}>
          Built For Creators
        </h1>
        <h1 className={"mt-4 w-1/3 text-xl text-center text-primary-foreground z-30"}>
          Everything you need to design, share, and grow your online presence.
        </h1>

        <div className={'w-full flex flex-wrap justify-center items-center mt-8 gap-6'}>
          {
            [
              {
                icon: LuPaintbrush,
                heading: "Custom Branding",
                desc: "Make your page truly yours with unique themes, fonts, and flexible layouts."
              },
              {
                icon: CgMusicNote,
                heading: "Rich Media Support",
                desc: "Showcase videos, images, and interactive embeds directly on your link page."
              },
              {
                icon: GiSettingsKnobs,
                heading: "Interactive Features",
                desc: "Boost engagement using polls, forms, and clickable interactive cards."
              },
              {
                icon: IoBarChartOutline,
                heading: "Insightful Analytics",
                desc: "See what works best with real-time data and detailed traffic reports."
              },
              {
                icon: LuEarth,
                heading: "Worldwide Sharing",
                desc: "Share your page anywhere and connect with audiences across the globe."
              },
              {
                icon: LuAward,
                heading: "Milestone Badges",
                desc: "Celebrate growth and proudly highlight your key online achievements."
              },
            ].map((item, index) => (
              <div
                className={'w-[20%] flex flex-col justify-start items-start p-8 border border-border gap-4 rounded-xl transition duration-500 hover:border-primary'}
                key={index}>
                <div className={'flex flex-row justify-start items-center w-full'}>
                  <div className={'flex justify-center items-center p-3 bg-border rounded-xl'}>
                    <item.icon className={'text-primary'} size={24}/>
                  </div>
                  <h1 className={'text-white font-medium text-xl ml-4'}>{item.heading}</h1>
                </div>
                <h1 className={'font-medium' +
                  ' text-primary-foreground'}>{item.desc}</h1>
              </div>
            ))
          }
        </div>
      </div>

      {/* Integrations Section */}
      <div
        className="flex justify-between items-center flex-row bg-no-repeat z-30 p-32">
        <div className={'flex flex-col justify-start items-start'}>
          <div className="gradient-border mb-4">
          <span className="gradient-content text-sm">
            Widget Integration
          </span>
          </div>
          <h1
            className={"text-5xl font-medium z-30 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent"}>
            Integrate Your Favorite Platforms
          </h1>
          <h1 className={"mt-4 text-xl text-start text-primary-foreground max-w-2/3 z-30"}>
            Add your favorite platforms directly to your profile and showcase content, updates, or media to enhance your
            online presence.
          </h1>
        </div>

        <div className={'w-full max-w-1/3 flex flex-wrap justify-center items-center mt-8 gap-8'}>
          {
            Array.from({length: 12}, (_, index) => (
              <div className={''} key={index}>
                <img src={`/icons/socials/Service-${index}.png`} alt={`Icon ${index}`} width={72} height={72}/>
              </div>
            ))
          }
        </div>
      </div>

      {/* Growing Community Section */}
      <div className="flex flex-col justify-center items-center z-30 py-24">
        <div className="gradient-border mb-4">
          <span className="gradient-content text-sm">Join 27k+ Users</span>
        </div>
        <h1 className="text-5xl font-medium z-30">Growing Community</h1>
        <h1 className="mt-4 text-xl text-center text-primary-foreground z-30 max-w-2xl">
          Connect with creators, brands, and entrepreneurs building their online presence with our platform.
        </h1>

        <div className="mt-12 w-full flex flex-col gap-4">
          <CarouselRow speed={50} reverse={false}/>
          <CarouselRow speed={50} reverse={true}/>
          <CarouselRow speed={50} reverse={false}/>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="flex flex-col justify-center items-center z-30 py-24 px-32">
        <div className="gradient-border mb-4">
          <span className="gradient-content text-sm">Simple Pricing</span>
        </div>
        <h1 className="text-5xl font-medium z-30">Choose Your Plan</h1>
        <h1 className="mt-4 text-xl text-center text-primary-foreground z-30 max-w-2xl">
          Get started for free or access advanced features with a premium subscription.
        </h1>

        <div className="mt-12 flex flex-col lg:flex-row gap-8 px-12 w-full max-w-full justify-center">
          <Card
            className="flex p-8 border border-border w-1/2 rounded-2xl bg-background">
            <CardContent className={'p-0 flex justify-between items-start flex-col min-h-full'}>
              <div className={'flex justify-start items-start flex-col'}>
                <div className="gradient-border-d mb-4 w-fit">
                <span className="gradient-content-d p-2 text-sm"><TbTargetArrow className={'text-primary'}
                                                                                size={32}/></span>
                </div>
                <h2 className="text-2xl font-semibold text-white">Basic plan</h2>
                <p className="text-primary-foreground">
                  Perfect for getting started, explore essential features and create your first profile without any
                  cost.
                </p>
                <p className="text-3xl font-medium text-white mt-6">Free</p>

                <ul className="mt-6 space-y-3 text-primary-foreground">
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Customizable link page
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Social media integration
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Basic customization
                    options
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Analytics dashboard</p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Desktop & mobile access
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Avatar & background</p>
                </ul>

              </div>

              <button className="gradient-border-i w-full transition duration-500 hover:opacity-50 cursor-pointer">
                <span className="gradient-content-i w-full text-sm">
                  Sign up
                </span>
              </button>
            </CardContent>
          </Card>

          <Card
            className="flex p-8 border border-border w-1/2 rounded-2xl border border-border bg-ring">
            <CardContent className={'p-0 flex justify-between gap-8 items-start flex-col min-h-full'}>
              <div className={'flex justify-start items-start flex-col relative'}>
                <div className="gradient-border absolute right-0 top-0">
                  <span className="gradient-content text-xs">
                    Most Popular
                  </span>
                </div>
                <div className="gradient-border-d mb-4 w-fit">
                  <span className="gradient-content-d p-2 text-sm"><IoDiamondOutline className={'text-primary'} size={32}/></span>
                </div>
                <h2 className="text-2xl font-semibold text-white">Premium plan</h2>
                <p className="text-primary-foreground">
                  Unlock all advanced features with unlimited customization, advanced tools, and full analytics.
                </p>
                <p className="text-3xl font-medium text-white mt-6">Free</p>

                <ul className="mt-6 space-y-3 text-primary-foreground">
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Everything in Free
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Verified Badge &
                    Verification
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Advanced customization
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Exclusive premium themes
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Custom animations &
                    effects</p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Priority support</p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Exclusive features access
                  </p>
                </ul>
              </div>

              <button className="gradient-border w-full transition duration-500 hover:opacity-50 cursor-pointer">
                <span className="gradient-content w-full text-sm">
                  Sign up
                </span>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pricing Badge Intro Section */}
      <div
        className="flex justify-between items-center flex-row bg-no-repeat z-30 py-16 px-32">
        <div className={'flex flex-col justify-start items-start'}>
          <h1
            className={"text-5xl font-medium z-30 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent"}>
            Stand Out From The Crowd
          </h1>
          <h1 className={"mt-4 text-xl text-start text-primary-foreground max-w-2/3 z-30"}>
            Add your favorite platforms directly to your profile and showcase content, updates, or media to enhance your
            online presence.
          </h1>
        </div>

        <div className={'w-full max-w-1/3 flex flex-wrap justify-center items-center mt-8 gap-8'}>
          {
            Array.from({length: 12}, (_, index) => (
              <div className={''} key={index}>
                <img src={`/icons/badges/Service-${index}.png`} alt={`Icon ${index}`} className={'w-[72px] h-[72px]'} width={128} height={128}/>
              </div>
            ))
          }
        </div>
      </div>

      {/* Pricing Badge Section */}
      <div className="flex flex-col justify-center items-center z-30 py-24 px-32">
        <div className="gradient-border mb-4">
          <span className="gradient-content text-sm">Simple Pricing</span>
        </div>
        <h1 className="text-5xl font-medium z-30">Choose Your Plan</h1>
        <h1 className="mt-4 text-xl text-center text-primary-foreground z-30 max-w-2xl">
          Get started for free or access advanced features with a premium subscription.
        </h1>

        <div className="mt-12 flex flex-col lg:flex-row gap-8 px-12 w-full max-w-full justify-center">
          <Card
            className="flex p-8 border border-border w-1/2 rounded-2xl bg-background">
            <CardContent className={'p-0 flex justify-between items-start flex-col min-h-full'}>
              <div className={'flex justify-start items-start flex-col'}>
                <div className="gradient-border-d mb-4 w-fit">
                <span className="gradient-content-d p-2 text-sm"><TbTargetArrow className={'text-primary'} size={32}/></span>
                </div>
                <h2 className="text-2xl font-semibold text-white">Verified badge</h2>
                <p className="text-primary-foreground">
                  Gain trust & visibility with essential features.
                </p>
                <p className="text-3xl font-medium text-white mt-6">Free</p>

                <ul className="mt-6 space-y-3 text-primary-foreground">
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Official verification for accounts
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Priority integration in search results
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Priority placement on community feeds
                  </p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Basic analytics dashboard</p>
                </ul>

              </div>

              <button className="gradient-border-i w-full transition duration-500 hover:opacity-50 cursor-pointer">
                <span className="gradient-content-i w-full text-sm">
                  Get Verified Now
                </span>
              </button>
            </CardContent>
          </Card>

          <Card
            className="flex p-8 border border-border w-1/2 rounded-2xl border border-border bg-ring">
            <CardContent className={'p-0 flex justify-between gap-8 items-start flex-col min-h-full'}>
              <div className={'flex justify-start items-start flex-col w-full relative'}>
                <div className="gradient-border absolute right-0 top-0">
                  <span className="gradient-content text-xs">
                    Most Popular
                  </span>
                </div>
                <div className="gradient-border-d mb-4 w-fit">
                  <span className="gradient-content-d p-2 text-sm"><IoDiamondOutline className={'text-primary'} size={32}/></span>
                </div>
                <h2 className="text-2xl font-semibold text-white">Custom badge</h2>
                <p className="text-primary-foreground">
                  Make your mark with a unique badge and advanced tools.
                </p>
                <p className="text-3xl font-medium text-white mt-6">Free</p>

                <ul className="mt-6 space-y-3 text-primary-foreground">
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> A Verified-like badge with variations</p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Custom-designed badge</p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Advanced customization options</p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Personalized profile themes</p>
                  <p className={'flex flex-row justify-start items-center gap-2'}><GoDotFill/> Access to exclusive manager tools</p>
                </ul>
              </div>

              <button className="gradient-border w-full transition duration-500 hover:opacity-50 cursor-pointer">
                <span className="gradient-content w-full text-sm">
                  Upgrade to Custom Badge
                </span>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Make Mark Section */}
      <div
        className="flex justify-between items-center flex-row bg-no-repeat z-30 px-32">
        <div className={'flex flex-col justify-start items-start'}>
          <h1
            className={"text-5xl font-medium z-30 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent"}>
            Make Your Mark Online
          </h1>
          <h1 className={"mt-4 text-xl text-start text-primary-foreground max-w-2/3 z-30"}>
            Join thousands of creators who trust sarc.ac to showcase their unique digital identity.
          </h1>
          <button className="gradient-border-i  mt-4 transition duration-500 hover:opacity-50 cursor-pointer">
            <span className="gradient-content-i w-full text-sm">
              Try It Now
            </span>
          </button>
        </div>

        <div className={'w-full max-w-1/3 flex flex-wrap justify-center items-center mt-8 gap-8'}>
          <img src={'/backgrounds/Hero_Bottom.png'} className={'scale-125'}/>
        </div>
      </div>

      {/* Footer */}
      <div className={'flex justify-between items-center flex-row px-32 py-16'}>
        <div className={'flex flex-col justify-start items-start gap-2'}>
          <div className={'flex flex-row justify-start items-start gap-2'}>
            <h1 className={'text-3xl font-medium'}>Scar.ac</h1>
            <Card className={'p-0 gap-0'}>
              <CardContent className={'p-2 gap-2 flex flex-row justify-center items-center'}>
                <div className={'bg-green-300 rounded-full h-2 w-2 border border-4 border-green-900/50 animate-pulse p-1'}/>
                <h1 className={'font-medium'}>Service Status</h1>
              </CardContent>
            </Card>
          </div>
          <p className={'text-primary-foreground'}>Create a stunning digital identity that truly represents you.</p>
        </div>
        <div className={'flex justify-end items-center flex-row gap-16'}>
          <div className={'flex justify-start gap-2 items-start flex-col'}>
            <h1 className={'font-medium text-xl text-white'}>Quick Links</h1>
            <h1 className={'font-medium text-primary-foreground mt-2'}>Features</h1>
            <h1 className={'font-medium text-primary-foreground'}>Community</h1>
            <h1 className={'font-medium text-primary-foreground'}>Pricing</h1>
          </div>
          <div className={'flex justify-start gap-2 items-start flex-col'}>
            <h1 className={'font-medium text-xl text-white'}>Socials</h1>
            <h1 className={'font-medium text-primary-foreground mt-2'}>Instagram</h1>
            <h1 className={'font-medium text-primary-foreground'}>X</h1>
            <h1 className={'font-medium text-primary-foreground'}>Discord</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const creators = [
  {name: "Kristin Watson", views: "120K+", img: "/avatars/Ellipse 73-1.png"},
  {name: "Henry, Arthur", views: "89K+", img: "/avatars/Ellipse 73-2.png"},
  {name: "Nguyen, Shane", views: "74K+", img: "/avatars/Ellipse 73-3.png"},
  {name: "Flores, Juanita", views: "95K+", img: "/avatars/Ellipse 73-4.png"},
  {name: "Theressa Webb", views: "160K+", img: "/avatars/Ellipse 73-5.png"},
  {name: "Johnric Jacob", views: "143K+", img: "/avatars/Ellipse 73-6.png"},
  {name: "Tynishia Obey", views: "128K+", img: "/avatars/Ellipse 73-7.png"},
  {name: "Elenor Pena", views: "132K+", img: "/avatars/Ellipse 73-8.png"},
  {name: "Sidharth Yadav", views: "97K+", img: "/avatars/Ellipse 73-9.png"},
  {name: "Ravi", views: "68K+", img: "/avatars/Ellipse 73-10.png"},
  {name: "Bijak Kumar", views: "110K+", img: "/avatars/Ellipse 73-11.png"},
];

function CreatorCard({img, name, views}: { img: string; name: string; views: string }) {
  return (
    <Card className="p-4 flex flex-row min-w-fit items-center border border-border rounded-xl">
      <CardContent className={'flex flex-row p-0 justify-center items-center gap-4'}>
        <img src={`/icons${img}`} alt={name} width={48} height={48} className="rounded-full w-[48px] h-[48px]"/>
        <h1 className="text-white text-lg font-medium">{name}</h1>
        <p className="text-sm text-primary-foreground"><span className={'text-white'}>{views}</span> Views</p>
      </CardContent>
    </Card>
  );
}

function CarouselRow({speed = 30, reverse = false}: { speed?: number; reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full w-full">
      <motion.div
        className="flex gap-4 w-full"
        animate={{x: reverse ? ["0%", "-100%"] : ["-100%", "0%"]}}
        transition={{repeat: Infinity, duration: speed, ease: "linear"}}
      >
        {[...creators, ...creators].map((creator, i) => (
          <CreatorCard key={i} {...creator} />
        ))}
      </motion.div>
    </div>
  );
}