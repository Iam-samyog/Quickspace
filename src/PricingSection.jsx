import { useState } from 'react';
import { CheckCircle, X, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredTier, setHoveredTier] = useState(null);

  const pricingTiers = [
    {
      name: 'Basic',
      description: 'Perfect for startups and small teams getting started',
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        '5 team members',
        '10 projects',
        '5GB storage',
        'Basic analytics',
        'API access',
      ],
      notIncluded: [
        'Advanced integrations',
        'Custom branding',
        'Priority support',
        'Advanced security'
      ],
      color: 'bg-blue-50',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      icon: <Zap size={20} className="text-blue-500" />
    },
    {
      name: 'Pro',
      description: 'Scale your business with enhanced features and support',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'Unlimited team members',
        'Unlimited projects',
        '50GB storage',
        'Advanced analytics',
        'API access',
        'Advanced integrations',
        'Custom branding',
      ],
      notIncluded: [
        'Priority support',
        'Advanced security'
      ],
      color: 'bg-purple-50',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      popular: true,
      icon: <Sparkles size={20} className="text-purple-500" />
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations with premium needs',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Unlimited storage',
        'Advanced analytics',
        'API access',
        'Advanced integrations',
        'Custom branding',
        'Priority support',
        'Advanced security'
      ],
      notIncluded: [],
      color: 'bg-indigo-50',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      icon: <Shield size={20} className="text-indigo-500" />
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredTier(index);
  };

  const handleMouseLeave = () => {
    setHoveredTier(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose the perfect plan for your needs
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Simple, transparent pricing that grows with your business
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`${
                  billingCycle === 'monthly' ? 'bg-white shadow-sm' : 'bg-transparent'
                } relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`${
                  billingCycle === 'yearly' ? 'bg-white shadow-sm' : 'bg-transparent'
                } relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                hoveredTier === index ? 'scale-105' : 'scale-100'
              } ${tier.popular ? 'md:-mt-8 md:mb-8 ring-2 ring-indigo-600' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {tier.popular && (
                <div className="bg-indigo-600 py-2 text-center text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className={`${tier.color} p-8 relative`}>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-white mr-3">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">
                    ${billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice}
                  </span>
                  <span className="ml-2 text-gray-500">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white flex items-center justify-center ${tier.buttonColor}`}
                >
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
              <div className="bg-white p-8">
                <h4 className="font-medium text-gray-900 mb-4">Included in this plan:</h4>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {tier.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-medium text-gray-900 mb-4">Not included:</h4>
                    <ul className="space-y-3">
                      {tier.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-start text-gray-400">
                          <X size={18} className="text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help. Check out our FAQ or contact our support team for more assistance.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
              View FAQ
            </button>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700">
              Contact Sales
            </button>
          </div>
          <p className="mt-8 text-gray-500 text-sm">
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}
