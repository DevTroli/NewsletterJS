import { Instagram, FacebookIcon, Mail } from "lucide-react";
import Link from "next/link";

export function SocialMedias() {
  return (
    <>
    <div className="flex flex-row gap-4 justify-center mb-8">
      <Link
        href={'https://www.instagram.com/pablo_troli/'}
        target="_blank"
        className="hover:text-pink-400 dark:hover:opacity:90  items-center flex gap-1 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-600"
        >
          <Instagram className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            <span className="text-sm lg:text-md">Instagram</span>
        </Link>
        <Link
        href={'https://facebook.com/pablotroli'}
        target="_blank"
        className="hover:text-blue-500 flex gap-1 p-2 rounded-full items-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 dark:hover:opacity-90"
        >
          <FacebookIcon className="w-5 h-5"/>
          <span className="text-sm lg:text-md">Facebook</span>
        </Link>
        <Link
        href={'https://outlook.live.com/'}
        target="_blank"
        className="flex items-center gap-1 p-2 rounded-full hover:text-gray-400 dark:hover:opacity:90 bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 "
        >
          <Mail className="w-5 h-5" />
             <span className="text-sm lg:text-md">Outlook</span>
        </Link>
    </div>
    </>
  )
}