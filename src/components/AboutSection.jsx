import React from "react";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen bg-[#0D0D0D] py-24" id="about">
      {/* Background Elements */}
      <img
        src="/bg_element1.png"
        alt=""
        className="absolute top-0 left-0 w-32 md:w-48 lg:w-56 opacity-30"
      />
      <img
        src="/bg_element2.png"
        alt=""
        className="absolute bottom-0 right-0 w-32 md:w-48 lg:w-56 opacity-30"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Section Title */}
          <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-12">
            About TollywoodBites
          </h2>

          {/* Content Block */}
          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10">
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                <span className="text-[#FBA40E] font-semibold">TollywoodBites</span> is not just a food truck — it’s a journey back home for your taste buds. Based in <span className="italic">601 Fort Worth Dr, Denton, Texas</span>, we bring the bold and fiery flavors of <span className="text-[#FBA40E]">authentic Andhra cuisine</span> straight to your plate. Inspired by the glitz and glamour of Tollywood, we celebrate Andhra’s food culture as passionately as our love for cinema.
              </p>
              
              <blockquote className="border-l-4 border-[#FBA40E] pl-6 my-8">
                <p className="text-[#FBA40E] italic text-lg md:text-xl">
                  "Every bite is a blockbuster!"
                </p>
                <cite className="block text-white/60 mt-2 text-sm">- TollywoodBites</cite>
              </blockquote>

              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                We take pride in our <span className="text-[#FBA40E] font-semibold">handcrafted recipes</span> made with fresh ingredients, aromatic southern spices, and the authentic touch of Andhra kitchens. From crispy <span className="italic">dosas</span> and fiery <span className="italic">biryanis</span> to lip-smacking <span className="italic">pani poori</span> and snacks, every dish is a scene-stealer. Whether you're a fan of spicy flavors or craving something soulful, our menu is designed to make you go, <span className="italic">“Wow, that hit the spot!”</span>
              </p>
              
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                What makes TollywoodBites special? It’s our customers. You’re not just visitors; you’re the heroes of our story. <span className="text-[#FBA40E]">Your smiles and satisfaction certify the success of our recipes</span>. So, step up to our food truck, savor Andhra’s culinary magic, and let every bite remind you — life is meant to be enjoyed, one blockbuster meal at a time.
              </p>
            </div>

            {/* Features Section */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
