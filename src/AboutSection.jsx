import React from "react";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen bg-[#0D0D0D] py-24">
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
                USA - Land of immigrants with deep rooted cultures spanning across
                length and width of entire World. TollywoodBites is here, to celebrate
                culture, heritage through food, much more than nostalgia and recipes.
                In today's ever-growing competitive market, we are here with
                delicacies that tantalize the taste buds, providing excellent customer
                service and value for money.
              </p>
              
              <blockquote className="border-l-4 border-[#FBA40E] pl-6 my-8">
                <p className="text-[#FBA40E] italic text-lg md:text-xl">
                  "There is only one boss, the customer"
                </p>
                <cite className="block text-white/60 mt-2 text-sm">- Sam Walton</cite>
              </blockquote>

              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                We believe that <span className="text-[#FBA40E]">customers certify the success of recipe</span>, 
                the demand and growth. TollywoodBites gives attention to the diversified 
                food and culture of various cities in India. With the touch of southern 
                spices, we are trying to deliver <span className="italic">"scrumptious food 
                that smack your lips"</span> catering to South Asian, and local and 
                international foodies.
              </p>
            </div>

            {/* Stats or Features */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;