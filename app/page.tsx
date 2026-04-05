import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper, Clock, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            Stress‑Free Parties Start With the Right Supplies
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            These 3 Amazon party essentials help you set up faster, impress guests,
            and clean up without the headache.
          </p>
          <Button className="text-lg px-8 py-6">
            See My Go‑To Party Picks
          </Button>
        </motion.div>

        {/* Trust Icons */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="mx-auto mb-2" />
              <h3 className="font-semibold">Time‑Saving</h3>
              <p className="text-sm text-gray-500">Less setup. Faster cleanup.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <PartyPopper className="mx-auto mb-2" />
              <h3 className="font-semibold">Guest‑Approved</h3>
              <p className="text-sm text-gray-500">
                Used for birthdays, showers & events.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <ThumbsUp className="mx-auto mb-2" />
              <h3 className="font-semibold">Worth the Money</h3>
              <p className="text-sm text-gray-500">
                No flimsy dollar‑store stuff.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Product 1 */}
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="h-40 bg-gray-200 rounded mb-4" />
              <h4 className="font-semibold mb-2">
                Premium Disposable Tablecloth Set (Heavy‑Duty Plastic)
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Covers your tables evenly, doesn’t rip mid‑party, and instantly
                upgrades the look of any space. Perfect for kids’ parties, baby
                showers, or backyard events where spills are guaranteed.
              </p>
              <Button className="w-full">
                Check Price on Amazon
              </Button>
            </CardContent>
          </Card>

          {/* Product 2 */}
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="h-40 bg-gray-200 rounded mb-4" />
              <h4 className="font-semibold mb-2">
                Balloon Arch Kit with Pump & Command Hooks
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Creates a “wow” photo backdrop in under an hour — even if you’ve
                never done balloons before. Reusable accessories mean you can use
                it again for the next party.
              </p>
              <Button className="w-full">
                Check Price on Amazon
              </Button>
            </CardContent>
          </Card>

          {/* Product 3 */}
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="h-40 bg-gray-200 rounded mb-4" />
              <h4 className="font-semibold mb-2">
                All‑in‑One Disposable Serveware Set (Plates, Cups, Cutlery)
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Enough for 24–50 guests with a matching look so nothing feels thrown
                together. Huge cleanup win — toss everything and enjoy the rest of
                your night.
              </p>
              <Button className="w-full">
                Check Price on Amazon
              </Button>
            </CardContent>
          </Card>

        </div>

        {/* Affiliate Disclosure */}
        <p className="text-xs text-gray-500 text-center">
          Disclosure: As an Amazon Associate, I earn from qualifying purchases.
        </p>

      </div>
    </div>
  );
}


 
