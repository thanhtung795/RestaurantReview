import {Banner} from "@/app/components/banner";
import {ReviewForm} from "@/app/components/review-form";
import WebConfig from "@/app/config/WebConfig";
import AnimatedContent from "@/app/components/ui/Animation/AnimatedContent";

export default function RestaurantReview() {
    return (
        <main className="min-h-screen overflow-hidden max-h-screen bg-background flex flex-col items-center">
            <Banner/>
            <div className="relative w-full flex flex-col items-center flex-1">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-md opacity-80"
                    style={{backgroundImage: `url(${WebConfig.getBackground})`}}
                ></div>

                {/* Nội dung chính */}
                <div className="relative flex flex-col items-center mt-3 w-full">
                    <h1 className="text-3xl font-semibold text-black mb-2 bg-gray-100 filter opacity-90 px-6 py-3 rounded-full text-center">
                        Khảo sát chất lượng và dịch vụ nhà ăn
                    </h1>
                    <div className="w-[90%] max-w-[1300px] mx-auto h-[calc(100%-80px)] flex items-center">
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <AnimatedContent
                                distance={150}
                                direction="horizontal"
                                reverse={false}
                                config={{tension: 80, friction: 20}}
                                initialOpacity={0.2}
                                animateOpacity
                                scale={1.1}
                                threshold={0.2}
                            >
                                <ReviewForm/>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
