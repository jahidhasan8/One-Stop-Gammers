const freefire = () => {
    return (
            <div className="purchase my-10">
              <div className="purchase_container container mx-auto">
                <h1 className="text-3xl font-bold text-center">Free Fire Diamond</h1>
                <h4 className="font-bold text-center">SALE!</h4>
                <div className="grid grid-cols-2 gap-5 mx-10 mt-20">
                  <div className="w-[60%] mx-auto">
                    <img
                      className="w-[400px] h-[400px] inline-block object-cover rounded-lg"
                      src="https://www.talkesport.com/wp-content/uploads/free-fire-2.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold underline text-red-700 ml-5">Top Up List</h2>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <button className="bg-pink-100 w-full rounded-md py-2 text-lg font-medium">100 Diamond</button>
                        <button className="bg-pink-100 w-full rounded-md py-2 text-lg font-medium">200 Diamond</button>
                        <button className="bg-pink-100 w-full rounded-md py-2 text-lg font-medium">300 Diamond</button>
                        <button className="bg-pink-100 w-full rounded-md py-2 text-lg font-medium">400 Diamond</button>
                        <button className="bg-pink-100 w-full rounded-md py-2 text-lg font-medium">500 Diamond</button>
                        <button className="bg-pink-100 w-full rounded-md py-2 text-lg font-medium">1000 Diamond</button>
                       
                    </div>
                    <div className=" bg-gray-200 rounded-lg mt-5 text-center text-lg font-medium py-3 w-full">$00</div>
                    <button className="text-center py-2 w-full text-white bg-yellow-600 rounded-lg my-3">Add To Card</button>
                    <button className="text-center py-2 w-full text-white bg-yellow-600 rounded-lg">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          
        
    );
}

export default freefire;