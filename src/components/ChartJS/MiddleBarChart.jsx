
export default function MiddleBarChart() {

    return (
        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* box 1  */}
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              * Expense Chart *
            </div>
          </div>
        </div>

        {/* box 2 */}
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              
            </div>
          </div>
        </div>
        {/* box 3 */}
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              * Income Bar Chart *
            </div>
          </div>
        </div>
      </div>
    )
}