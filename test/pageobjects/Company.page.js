const Page = require("./Page");

class CompanyPage extends Page {
  get BackButton() {
    return $("//div[@class='btn btn-link']")
  }

  get CompanyImg() {
    return $("//img[@class='ant-image-img image']")
  }

  get CompanyName() {
    return $("//div[@class='mr-3 mb-3']/h2")
  }

  get CompanyDescription() {
    return $("//div[@class='mr-3 mb-3']/p")
  }

  get CompanyTechnicalTasksHeader() {
    return $("//div[@class='d-flex company-page']/div/h5")
  }

  get CompanyTechnicalTask() {
    return $("//div[@class = 'd-flex flex-wrap align-content-start']/a[1]")
  }

  get CompanyLikeButton() {
    return $("//button[@id='like-btn']")
  }

  get CompanyCommentButton() {
    return $("//button[@id='comment-btn']")
  }

  get CompanyCommentField() {
    return $("//div[@class='mt-2']//textarea[@id='comment-input']")
  }


  get CompanyCommentSendButton() {
    return $("//button[@id='send-btn']")
  }

  // get CompanyAuthorCommentName() {
  //   return $("//div[@class='btn btn-link']")
  // }

  // get CompanyCommentText() {
  //   return $("//div[@class='btn btn-link']")
  // }

  // get CompanyCommentLikeButton() {
  //   return $("//div[@class='btn btn-link']")
  // }

  // get CompanyCommentReplyButton() {
  //   return $("//div[@class='btn btn-link']")
  // }

  // get CompanyCommentAuthorAvatar() {
  //   return $("//div[@class='btn btn-link']")
  // }

  // get CompanyCommentDate() {
  //   return $("//div[@class='btn btn-link']")
  // }

  // get CompanyLoadMoreButton() {
  //   return $("//div[@class='btn btn-link']")
  // }


  // open() {
  //   return super.open("/company/")
  // }
}

module.exports = new CompanyPage();

