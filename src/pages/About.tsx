import { MapPin, Phone, Mail, Clock, Users, Award, Truck, Heart, Leaf, Star, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutFarmImage from "@/assets/about-farm.jpg";

export default function About() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          About <span className="text-primary">Inzovu</span> Market
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 px-2 sm:px-0">
          Your trusted partner for fresh, quality groceries delivered straight to your doorstep in Rwanda.
          We're committed to bringing you the finest selection of fruits, vegetables, dairy, bakery, meat, and pantry essentials
          from local farms and trusted suppliers.
        </p>
        <div className="flex justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-accent fill-accent" />
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-green-500" />
            <span>Farm Fresh</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span>Fast Delivery</span>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2024, Inzovu Market began with a simple mission: to make fresh, high-quality groceries
            accessible to everyone in Rwanda. We believe that everyone deserves access to nutritious, delicious food
            without compromising on quality or convenience.
          </p>
          <p className="text-muted-foreground mb-4">
            Our journey started with a small team passionate about connecting local farmers with urban consumers.
            Today, we're proud to serve thousands of customers across Rwanda, delivering farm-fresh produce
            and premium products right to your door within hours of harvest.
          </p>
          <p className="text-muted-foreground mb-4">
            We work directly with over 200 local farmers and suppliers across Rwanda to ensure that every product
            in our store meets our high standards for freshness, quality, and sustainability. From the lush hills
            of Rwanda's countryside to your kitchen table, we bridge the gap between farm and fork.
          </p>
          <p className="text-muted-foreground">
            Our commitment to Rwanda's agricultural community means supporting fair prices for farmers,
            promoting sustainable farming practices, and contributing to the local economy. When you shop with Inzovu,
            you're not just buying groceries – you're supporting a healthier Rwanda.
          </p>
        </div>
        <div className="relative">
          <img
            src={aboutFarmImage}
            alt="Fresh produce from Rwandan farms"
            className="rounded-2xl shadow-2xl w-full h-80 object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <p className="text-sm font-semibold text-foreground">Fresh from Rwandan Farms</p>
            <p className="text-xs text-muted-foreground">Supporting local agriculture</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="p-8">
          <CardContent className="text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To revolutionize grocery shopping in Rwanda by providing unparalleled access to fresh, locally-sourced
              products while supporting our farming community and promoting healthy eating habits across the nation.
            </p>
          </CardContent>
        </Card>
        <Card className="p-8">
          <CardContent className="text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become Rwanda's leading online grocery platform, setting the standard for quality, freshness,
              and customer service while contributing significantly to the growth of sustainable agriculture
              in East Africa.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our products, ensuring every item meets our strict standards
                for freshness, nutrition, and taste.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-muted-foreground">
                Supporting local farmers and building a stronger Rwandan community through sustainable practices
                and fair trade partnerships.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Convenience</h3>
              <p className="text-muted-foreground">
                Making grocery shopping easy and convenient with fast, reliable delivery services across
                all major cities in Rwanda.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Striving for excellence in everything we do, from product selection to customer service,
                setting new standards for online grocery shopping.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardContent>
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Farmers & Suppliers</h3>
              <p className="text-muted-foreground">
                Our network of dedicated farmers and suppliers work tirelessly to bring you the freshest produce
                Rwanda has to offer.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent>
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery Team</h3>
              <p className="text-muted-foreground">
                Our professional delivery drivers ensure your groceries arrive fresh and on time,
                with care and attention to detail.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent>
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
              <p className="text-muted-foreground">
                Our friendly support team is always ready to help with any questions or concerns
                you may have about your orders.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-muted/30 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Visit Us in Kigali</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-sm text-muted-foreground">KN 5 Ave, Kimihurura<br />Kigali, Rwanda</p>
          </div>
          <div className="text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-sm text-muted-foreground">+250 788 555 123</p>
          </div>
          <div className="text-center">
            <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">info@inzovumarket.rw</p>
          </div>
          <div className="text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Hours</h3>
            <p className="text-sm text-muted-foreground">Mon-Sun: 7AM-9PM</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            We serve customers across Rwanda with fast delivery to major cities including Kigali, Musanze, Rubavu, Huye, and Muhanga.
          </p>
          <p className="text-sm text-muted-foreground">
            For bulk orders or special requests, please contact our team directly.
          </p>
        </div>
      </div>
    </div>
  );
}
