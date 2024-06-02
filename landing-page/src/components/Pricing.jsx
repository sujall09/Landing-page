import React from 'react';
import PricingCard from './PricingCard';

function Pricing() {
    return (
        <div className="px-4">
            <h2 className="text-center my-10 font-bold text-4xl text-gray-800 mt-2 dark:text-white">OUR PRICING</h2>
            <div className="flex flex-wrap justify-center items-center">
                <PricingCard
                    heading="Standard Plan"
                    amount={5}
                    features={['Unlimited Access', 'Priority Support', '24/7 Access']}
                />
                <PricingCard
                    heading="Premium Plan"
                    amount={10}
                    features={['Unlimited Access', 'Priority Support', '24/7 Access', 'Additional Feature']}
                />
            </div>
        </div>
    );
}

export default Pricing;
