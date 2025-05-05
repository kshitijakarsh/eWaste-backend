"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CircleCheckBig,
  Globe,
  MoveRight,
  Shield,
  Users,
  Smartphone,
  Recycle,
  BadgeCheck,
  ShoppingBag,
  CircleDollarSign,
  Clock,
  Leaf,
  BarChart4,
  LineChart,
  Award,
  Badge,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-grow grid grid-cols-2 gap-4 items-center px-10 py-50 animate-blur-in">
        <div>
          <h1 className="text-5xl font-semibold text-black leading-snug">
            About <span className="text-green-600 font-bold">EcoTech</span>
          </h1>
          <p className="text-black text-xl">
            Our mission is to promote a circular economy and reduce
            environmental damage caused by improperly disposed electronics.
          </p>
          <div className="flex gap-4 mt-6">
            <button
              className="p-4 rounded-xl flex gap-2 bg-green-400 hover:bg-green-600"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Join the Movement <MoveRight />
            </button>
            <a href="#our-vision">
              <button className="p-4 text-black rounded-xl flex gap-2 border border-black">
                Learn more
              </button>
            </a>
          </div>
        </div>

        <div className="relative  h-[500px] flex items-center justify-center">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="./about.png"
            alt="hero-image"
          />

          <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur-md shadow-lg p-4 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800">
              A World Without E-Waste
            </h3>
            <p className="text-sm text-gray-600">
              Where every gadget finds a second life
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="our-vision" className="bg-gray-50">
        <div className="m-10 p-10 max-w-7xl mx-auto px-10">
          <h2 className="text-4xl text-center font-semibold text-black mb-6">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg text-center">
            A world where no gadget goes to waste and technology is continuously
            reused, repaired, and recycled.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex flex-col items-center justify-center space-y-2 p-10 hover:shadow-lg h-80">
              <div className="bg-green-200 rounded-full w-16 h-16 flex items-center justify-center">
                <Leaf className="text-green-500 text-xl" />
              </div>
              <h1 className="mt-2 text-xl text-black text-center">
                Promote Sustainability
              </h1>
              <p className="text-black text-center">
                Creating a circular economy where electronic waste becomes a
                valuable resource.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 p-8 hover:shadow-lg h-80">
              <div className="mt-6 bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="text-blue-500 text-xl" />
              </div>
              <h1 className="mt-2 text-xl text-black text-center">
                Empower Communities
              </h1>
              <p className="text-black text-center">
                Making technology accessible to underserved communities through
                our initiatives.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-8 hover:shadow-lg h-80">
              <div className="bg-orange-200 rounded-full w-16 h-16 flex items-center justify-center">
                <Globe className="text-orange-500 text-xl" />
              </div>
              <h1 className="mt-2 text-xl text-black text-center">
                Environmental Impact
              </h1>
              <p className="text-black text-center">
                Reducing landfill waste and preventing toxic materials from
                harming our planet.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-8 hover:shadow-lg h-80">
              <div className="bg-purple-200 rounded-full w-16 h-16 flex items-center justify-center">
                <Award className="text-purple-500 text-xl" />
              </div>
              <h1 className="mt-2 text-xl text-black text-center">
                Reward Sustainability
              </h1>
              <p className="text-black text-center">
                Incentivizing eco-friendly behavior through our EcoPoints reward
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-grow grid grid-cols-2 gap-6 items-center px-10 py-40">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            className="rounded-4xl w-full h-auto"
            src="./ewaste.png"
            alt="our-process"
          />
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-black mb-6">What We Do</h2>

          <div className="flex flex-col space-y-4">
            <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
              <div className="bg-green-200 rounded-full w-20 h-16 flex items-center justify-center">
                <Smartphone className="text-green-500 text-xl" />
              </div>
              <div>
                <h1 className="text-black text-xl font-semibold mb-1">
                  We Collect E-Waste
                </h1>
                <p className="text-black text-sm">
                  We make it easy for users to dispose of their unused
                  electronics by offering convenient pickup and drop-off
                  options.
                </p>
              </div>
            </div>

            <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
              <div className="bg-blue-200 rounded-full w-20 h-16 flex items-center justify-center">
                <Recycle className="text-blue-500 text-xl" />
              </div>
              <div>
                <h1 className="text-black text-xl font-semibold mb-1">
                  We Sort & Process
                </h1>
                <p className="text-black text-sm">
                  Devices are sorted into reusable, repairable, and recyclable
                  categories. Hazardous items like batteries are responsibly
                  disposed of.
                </p>
              </div>
            </div>

            <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
              <div className="bg-orange-200 rounded-full w-20 h-16 flex items-center justify-center">
                <ShoppingBag className="text-orange-500 text-xl" />
              </div>
              <div>
                <h1 className="text-black text-xl font-semibold mb-1">
                  We Refurbish & Resell
                </h1>
                <p className="text-black text-sm">
                  Functional or repairable items are refurbished and resold.
                  Valuable components are harvested and sold to repair shops or
                  resellers.
                </p>
              </div>
            </div>

            <div className="mb-2 flex items-start gap-4 p-6 hover:shadow-md border rounded-lg">
              <div className="bg-purple-200 rounded-full w-20 h-16 flex items-center justify-center">
                <CircleDollarSign className="text-purple-500 text-xl" />
              </div>
              <div>
                <h1 className="text-black text-xl font-semibold mb-1">
                  We Reward You
                </h1>
                <p className="text-black text-sm">
                  Users earn EcoPoints based on the value and category of the
                  items they submit, which can be redeemed for products,
                  services, or discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-100">
        <div className="w-full max-w-7xl mx-auto py-16 px-10">
          <h1 className="text-black text-4xl text-center font-bold mb-8">
            EcoPoints System
          </h1>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 bg-white border p-6 rounded-lg shadow-md">
              <h2 className="text-xl text-center font-semibold text-black mb-4">
                How You Earn Points
              </h2>

              <div className="space-y-4 text-black">
                <div className="flex gap-4 items-start">
                  <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
                    <CircleCheckBig className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Device Type</h3>
                    <p className="text-sm text-black">
                      Different devices earn different point values
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
                    <h3 className="font-semibold text-lg">Age & Model</h3>
                    <p>Newer devices typically earn more points</p>
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

            <div className="col-span-2">
              <div className="bg-white border p-6 rounded-lg shadow-md h-full">
                <h2 className="text-xl font-semibold text-black mb-4">
                  What You Can Do With EcoPoints
                </h2>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="border p-4 rounded-lg text-center">
                    <div className="bg-green-200 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <ShoppingBag className="text-green-500" />
                    </div>
                    <h3 className="text-black font-medium">
                      Refurbished Gadgets
                    </h3>
                    <p className="text-green-600 text-sm">
                      Purchase quality tech
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg text-center">
                    <div className="bg-blue-200 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Badge className="text-blue-500" />
                    </div>
                    <h3 className="text-black font-medium">Discounts</h3>
                    <p className="text-green-600 text-sm">
                      On new eco-friendly devices
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg text-center">
                    <div className="bg-purple-200 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Globe className="text-purple-500" />
                    </div>
                    <h3 className="text-black font-medium">Support Causes</h3>
                    <p className="text-green-600 text-sm">
                      Fund sustainable initiatives
                    </p>
                  </div>
                </div>

                <hr className="my-6" />

                <h3 className="text-black font-semibold mb-4">
                  Redemption Examples
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-black">
                        Refurbished iPad
                      </h4>
                      <span className="text-green-600 font-bold">
                        3,500 points
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Latest generation, excellent condition
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-black">
                        20% Off New Laptop
                      </h4>
                      <span className="text-green-600 font-bold">
                        2,000 points
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Valid at partner retailers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          {/* Revenue Model */}
          <div>
            <h2 className="text-4xl font-semibold text-black mb-4">
              Revenue & Sustainability Model
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
              Our business model turns waste into value. We’ve developed
              multiple revenue streams that support our mission of reducing
              e-waste and promoting sustainability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <ShoppingBag className="text-green-500" />,
                  title: "Refurbished Sales",
                  desc: "Revenue from refurbished device sales.",
                  color: "green-200",
                },
                {
                  icon: <BarChart4 className="text-blue-500" />,
                  title: "Component Resale",
                  desc: "Bulk resale of parts to B2B clients.",
                  color: "blue-200",
                },
                {
                  icon: <LineChart className="text-orange-500" />,
                  title: "Metal Recovery",
                  desc: "Partnering with facilities for metal extraction.",
                  color: "orange-200",
                },
                {
                  icon: <Users className="text-purple-500" />,
                  title: "Brand Partnerships",
                  desc: "Affiliate income & featured listings.",
                  color: "purple-200",
                },
              ].map(({ icon, title, desc, color }, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-sm border"
                >
                  <div
                    className={`bg-${color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Matters */}
          <div>
            <h2 className="text-4xl font-semibold text-black mb-4">
              Why It Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe className="text-green-500 text-xl" />,
                  title: "Environmental Impact",
                  desc: "We reduce landfill waste and prevent toxins from contaminating the environment.",
                  color: "green-200",
                },
                {
                  icon: <Users className="text-blue-500 text-xl" />,
                  title: "Social Responsibility",
                  desc: "We provide access to tech for underserved communities and create green jobs.",
                  color: "blue-200",
                },
                {
                  icon: <Shield className="text-purple-500 text-xl" />,
                  title: "Corporate Impact",
                  desc: "We help companies meet ESG goals through transparent impact reporting.",
                  color: "purple-200",
                },
              ].map(({ icon, title, desc, color }, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-sm border flex flex-col items-start gap-4"
                >
                  <div
                    className={`bg-${color} w-14 h-14 rounded-full flex items-center justify-center`}
                  >
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-teal-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-white mb-8">
            Be part of the solution. Every device you contribute creates ripples
            of positive impact across communities and our planet.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="p-4 rounded-xl flex gap-2 bg-green-800 text-white hover:bg-green-900"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Create an Account <MoveRight />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
