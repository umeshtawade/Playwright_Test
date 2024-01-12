class SearchHotelPage {
    constructor(page) 
    {
        this.page = page;
        this.location = page.locator('//select[@id="location"]')
        this.hotel = page.locator('//select[@id="hotels"]')
        this.roomtype = page.locator('//select[@id="room_type"]')
        this.roomnos = page.locator('//select[@id="room_nos"]')
        this.submitbtn = page.locator('//input[@id="Submit"]')
    }

    async searchHotel(loc, htl, rmtype, rmnos )
    {
        await this.location.selectOption(loc)
        await this.hotel.selectOption(htl)
        await this.roomtype.selectOption(rmtype)
        await this.roomnos.selectOption(rmnos)
        await this.submitbtn.click()
        
    }

}

module.exports={SearchHotelPage}