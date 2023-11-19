import { CTA } from "@/components/CTA";
import { The_form } from "@/components/Form";
import { SocialMedias } from "@/components/SocialMedias";



export default function Home() {
  return (
  <>
    <section className="space-y-6 pt-4 pb-2 md:pb-8 md:pt-8 lg:py-10">
      <div className="container max-w-[56rem] items-center justify-center">
        <SocialMedias />
        <CTA />
        <The_form/>
      </div>
    </section>
  </>
  )
}
