import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <div className="h-[300px] bg-gradient-cool relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">Get in touch with Digital Tech Drive</p>
        </motion.div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-dtd-blue"
                      placeholder="Your Name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-dtd-blue"
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-dtd-blue"
                      placeholder="Your message..."
                      data-testid="input-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-rainbow text-white border-0 hover-elevate active-elevate-2"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-dtd-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-dtd-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Kabaiya Road, Naya Bazar<br />
                      Lakhisarai, Bihar, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-dtd-green/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-dtd-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+916206528684" className="hover:text-dtd-green transition-colors">
                        +91 62065 28684
                      </a><br />
                      <a href="tel:+917004973244" className="hover:text-dtd-green transition-colors">
                        +91 7004973244
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-dtd-orange/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-dtd-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:digitaltechdrive@gmail.com" className="hover:text-dtd-orange transition-colors">
                        digitaltechdrive@gmail.com
                      </a><br />
                      <a href="mailto:kysdc2017lakhisarai@gmail.com" className="hover:text-dtd-orange transition-colors">
                        kysdc2017lakhisarai@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.123!2d86.1!3d25.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzEyLjAiTiA4NsKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-md"
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
