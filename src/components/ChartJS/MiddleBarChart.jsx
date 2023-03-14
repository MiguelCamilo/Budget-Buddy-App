import { ScrollReveal } from "reveal-on-scroll-react";

export default function MiddleBarChart() {

    return (
        <ScrollReveal.div delay={2} animation="fade-in" className="mt-4 w-full md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* box 1  */}
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* * Expense Bar Chart * */}
            </div>
          </div>
        </div>

        {/* box 2 */}

        {/* box 3 */}

      </ScrollReveal.div>
    )
}