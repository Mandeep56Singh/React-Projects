
function ProgressTracker() {
    return (
      <div className="bg-red-400 flex justify-around p-4 sm:p-8 rounded-md md:p-12 ">
        <div className="flex flex-col justify-center h-[120px] sm:h-[200px] lg:h-[280px] xl:h-[320px] max-[359px]:h-[100px]">
          <h1 className="text-white poppins-medium text-[22px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-[359px]:text-lg">
            Your daily task <br />
            almost done
          </h1>
          <p className="text-white poppins-light mt-10 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-[359px]:text-lg">
            5 of 8 completed
          </p>
        </div>

        <div className="flex ">
          <div className="bg-white   rounded-full flex items-center justify-center size-[120px] sm:size-[200px] lg:size-[280px] xl:size-[320px] max-[359px]:size-[80px]">
            <div className="bg-red-400 size-10/12 rounded-full flex items-center justify-center">
              <h1 className="text-white poppins-medium text-[22px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-[359px]:text-lg">
                62.5%
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ProgressTracker;