"use client";
import Header from "@/components/Header";
import {
  CircleCheckBig,
  CircleDollarSign,
  Clock,
  Globe,
  MoveRight,
  Shield,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Smartphone, Recycle, BadgeCheck, ShoppingBag } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow grid grid-cols-2 gap-4 items-center px-10 py-50 animate-blur-in">
        <div>
          <h1 className="text-5xl font-semibold text-black leading-snug">
            Turn <span className="text-green-600 font-bold">EcoTech</span> into{" "}
            <span className="text-yellow-500 font-bold">Rewards</span> & Save
            the Planet
          </h1>
          <p className="text-black text-xl">
            Recycle your old devices, earn points, and redeem them for new
            eco-friendly products. Join us in creating a sustainable future.
          </p>
          <div className="flex gap-4 mt-6">
            <button
              className="p-4 rounded-xl flex gap-2 bg-green-400 hover:bg-green-600 "
              onClick={() => {
                router.push("/signup");
              }}
            >
              get started <MoveRight />
            </button>
            <a href="#how-it-works">
              <button className="p-4 text-black rounded-xl flex gap-2 border border-black">
                learn how it works
              </button>
            </a>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          <img
            className="rounded-4xl w-full h-auto"
            src="./hero.png"
            alt="hero-image"
          />

          <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur-md shadow-lg p-4 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800">Earn Points</h3>
            <p className="text-sm text-gray-600">
              Recycle responsibly and gain eco-rewards!
            </p>
          </div>
        </div>
      </main>

      <section id="how-it-works" className="bg-gray-50">
        <div className="m-10 p-10 max-w-7xl mx-auto px-10">
          <h2 className="text-4xl text-center font-semibold text-black mb-6">
            How It Works
          </h2>
          <p className="text-gray-700 text-lg text-center">
            Learn how you can contribute to a greener future by recycling your
            e-waste through our platform.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex flex-col items-center justify-center space-y-2 p-10 hover:shadow-lg h-80">
              <div className="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
                <Smartphone className="text-blue-500 text-xl" />
              </div>
              <h1 className="mt-2 text-xl text-black text-center">
                Register your device
              </h1>
              <p className="text-black text-center">
                Sign up and register your old electronic devices on our
                platform.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 p-8 hover:shadow-lg h-80">
              <div className="mt-6 bg-green-200 rounded-full w-16 h-16 flex items-center justify-center">
                <Recycle className="text-green-500 text-xl" />
              </div>
              <h1 className="mt-2 text-xl text-black text-center">
                Schedule Pickup or Drop-off
              </h1>
              <p className="text-black text-center">
                Sign up and register your old electronic devices on our
                platform.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-8 hover:shadow-lg h-80">
              <div className="bg-orange-200 rounded-full w-16 h-16 flex items-center justify-center">
                <BadgeCheck className="text-orange-500 text-xl" />
              </div>
              <h1 className="mt-2 text-xl text-black text-center">
                Earn Points
              </h1>
              <p className="text-black text-center">
                Get points based on the condition and value of your recycled
                devices.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-8 hover:shadow-lg h-80">
              <div className="bg-purple-200 rounded-full w-16 h-16 flex items-center justify-center">
                <ShoppingBag className="text-purple-500 text-xl" />
              </div>
              <h1 className="mt-2 text-xl text-black text-center">
                Redeem Rewards
              </h1>
              <p className="text-black text-center">
                Use your earned points to purchase new eco-friendly products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-grow grid grid-cols-2 gap-6 items-center px-10 py-40">
        <div className="m-10 p-10 max-w-7xl mx-auto px-10">
          <h1 className="text-black text-6xl text-center font-bold">
            Benefits of using EcoTech
          </h1>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
            <div className="bg-green-200 rounded-full w-16 h-16 flex items-center justify-center">
              <Globe className="text-green-500 text-xl" />
            </div>
            <div>
              <h1 className="text-black text-xl font-semibold mb-1">
                Environmental Impact
              </h1>
              <p className="text-black text-sm">
                Reduce electronic waste in landfills and minimize toxic
                materials in our environment.
              </p>
            </div>
          </div>
          <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
            <div className="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
              <Shield className="text-blue-500 text-xl" />
            </div>
            <div>
              <h1 className="text-black text-xl font-semibold mb-1">
                Data Security
              </h1>
              <p className="text-black text-sm">
                Professional wiping of all data from your devices before
                recycling, ensuring privacy.
              </p>
            </div>
          </div>
          <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
            <div className="bg-orange-200 rounded-full w-16 h-16 flex items-center justify-center">
              <CircleDollarSign className="text-orange-500 text-xl" />
            </div>
            <div>
              <h1 className="text-black text-xl font-semibold mb-1">
                Earn Points
              </h1>
              <p className="text-black text-sm">
                Get rewarded for your contribution with points that convert to
                real value.
              </p>
            </div>
          </div>

          <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
            <div className="bg-purple-200 rounded-full w-16 h-16 flex items-center justify-center">
              <Users className="text-purple-500 text-xl" />
            </div>
            <div>
              <h1 className="text-black text-xl font-semibold mb-1">
                Community Building
              </h1>
              <p className="text-black text-sm">
                Join a growing community of environmentally conscious
                individuals making a difference.
              </p>
            </div>
          </div>

          <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
            <div className="bg-green-200 rounded-full w-16 h-16 flex items-center justify-center">
              <Clock className="text-green-500 text-xl" />
            </div>
            <div>
              <h1 className="text-black text-xl font-semibold mb-1">
                Convenient Process
              </h1>
              <p className="text-black text-sm">
                Easy scheduling and hassle-free pick-up or drop-off options to
                fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-100">
        <h1 className="text-black text-6xl text-center font-bold mb-8 mt-8">
          How Points Work
        </h1>

        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-3 gap-6 px-10">
            <div className="col-span-1 mt-6 h-3/4 bg-white border p-6 rounded-lg shadow-md">
              <h2 className="text-xl text-center font-semibold text-black mb-4">
                Point Valuation
              </h2>
              <p className="text-black text-center mb-4">
                Points are calculated based on several factors:
              </p>

              <div className="space-y-4 text-black">
                <div className="flex gap-4 items-start">
                  <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
                    <CircleCheckBig className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Device Age</h3>
                    <p className="text-sm text-black">
                      Newer devices are worth more points
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
                    <CircleCheckBig className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Condition</h3>
                    <p>Working devices earn more than damaged ones</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
                    <CircleCheckBig className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Market Value</h3>
                    <p>Higher value devices yield more points</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
                    <CircleCheckBig className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Environmental Impact
                    </h3>
                    <p>Devices with toxic components earn bonus points</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 w-full">
              <div className="mt-6 bg-white border p-6 rounded-lg shadow-md">
                <h1 className="text-black">Points Value By Device Type</h1>
                <div className="mt-6 flex gap-4">
                  <div className="border p-4 rounded-lg w-3xl">
                    <h1 className="text-black text-center">Smartphone</h1>
                    <p className="text-green-600 text-center">200-500 points</p>
                  </div>
                  <div className="border p-4 rounded-lg w-3xl">
                    <h1 className="text-black text-center">Laptop</h1>
                    <p className="text-green-600 text-center">
                      500-1500 points
                    </p>
                  </div>
                </div>
                <hr className="mt-6" />
                <h3 className="text-black mt-4 font-semibold">Example</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
                  <div className="mt-6 bg-white border rounded-lg shadow-md">
                    <img src="./image.png" alt="Device" />
                  </div>
                  <div className="p-2">
                    <h1 className="text-black text-2xl">iPhone 11</h1>
                    <p className="text-black text-sm">
                      2 years old, good condition
                    </p>

                    <hr className="mt-2" />

                    <div className="flex justify-between mt-4">
                      <h1 className="text-sm font-semibold text-black">
                        Base Value
                      </h1>
                      <h1 className="text-sm font-semibold text-black">
                        500 points
                      </h1>
                    </div>
                    <div className="flex justify-between mt-4">
                      <h1 className="text-sm font-semibold text-black">
                        Condition bonus:{" "}
                      </h1>
                      <h1 className="text-sm font-semibold text-black">
                        +150 points
                      </h1>
                    </div>
                    <div className="flex justify-between mt-4">
                      <h1 className="text-sm font-semibold text-black">
                        Age adjustment:
                      </h1>
                      <h1 className="text-sm font-semibold text-black">
                        -50 points
                      </h1>
                    </div>

                    <hr className="mt-2" />
                    <div className="flex justify-between mt-4">
                      <h1 className="text-sm font-semibold text-black">
                        Total:
                      </h1>
                      <h1 className="text-sm font-semibold text-black">
                        600 points
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
