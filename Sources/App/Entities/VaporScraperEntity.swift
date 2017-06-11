import Vapor
import SwiftSoup

class VaporScraper: Scraper {
  let url = "https://github.com/vapor/vapor"
  let name = "vapor"
  let website = "https://vapor.codes"
  let selector = "[href='/vapor/vapor/stargazers']"
  let drop: Droplet
  
  init(drop: Droplet) {
    self.drop = drop
  }
  
  // MARK: public functions
  
  func scrapeStars() throws -> Int {
    let html = try getWebsite()
    let stars = try scrapeStars(html: html)
    
    return stars
  }

  // MARK: private functions
  
  private func getWebsite() throws -> Document {
    let resp = try drop.client.get(url).description
    
    guard let html: Document = try? SwiftSoup.parse(resp) else {
      throw ScraperError.couldNotParse("could not parse response to html (\(url))")
    }
    
    return html
  }
  
  private func scrapeStars(html: Document) throws -> Int {
    let starsString = try html.select(selector).text().components(separatedBy: ",").joined()
    
    guard let stars = Int(starsString) else {
      throw ScraperError.couldNotConvert("could not convert stars as string to type int (\(url))")
    }
    
    return stars
  }
}
