import {Banner} from "@/components/banner"
import {ReviewForm} from "@/components/review-form"
import WebConfig from "@/config/WebConfig";
import AnimatedContent from "@/components/ui/Animation/AnimatedContent";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Banner/>
            <div className="relative w-full h-fit flex flex-col justify-center items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-8 opacity-80"
                    style={{backgroundImage: `url(${WebConfig.getBackground})`}}>
                </div>

                <div className="relative container h[960px] mx-auto px-4 -mt-3 py-8">
                    <h1 className="text-3xl font-semibold text-black bg-gray-100 filter opacity-80 w-fit justify-center mx-auto rounded-full p-2 text-center mb-2">
                        Khảo sát chất lượng và dịch vụ nhà hàng
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <AnimatedContent
                            distance={150}
                            direction="horizontal"
                            reverse={false}
                            config={{tension: 80, friction: 20}}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}>
                            <ReviewForm/>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </main>
    )
}