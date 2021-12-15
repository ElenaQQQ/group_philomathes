const Page  = require("./Page");

class CompaniesPage extends Page {

  get CompaniesPageTitle() {
    return $("//h6[.='companies']");
  }

  get CompaniesCard() {
    return $("//div[@class = 'd-flex flex-wrap']/div[1]")
  }

  get CompaniesCardLink() {
    return $("//div[@class = 'd-flex flex-wrap']/div[1]/a[1]")

  }

  get CompaniesImg() {
    return $("//div[@class = 'd-flex flex-wrap']/div[1]//img[@class = 'ant-image-img image']")
  }

  get CompaniesName() {
    return $("//div[@class = 'd-flex flex-wrap']/div[1]//h2")
  }

  get CompamiesDescription() {
    return $("//div[@class = 'd-flex flex-wrap']/div[1]//p")
  }

  get CompaniesProblems() {
    return $("//div[@class = 'd-flex flex-wrap']/div[1]/div[@class = 'mt-auto']")
  }

  get CompaniesLoadMoreButton() {
    return $("//div[@class = 'd-flex flex-wrap']/div[@class = 'btn btn-link']")
  }

  open() {
    return super.open("/companies")
  }
}

module.exports = new CompaniesPage();