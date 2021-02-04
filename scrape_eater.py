from bs4 import BeautifulSoup as bs
import requests
import pymongo
from splinter import Browser
import warnings

warnings.filterwarnings('ignore')

# eater_content = {}

def scrape():

    executable_path = {'executable_path': 'c:/bin/chromedriver'}
    browser = Browser('chrome', **executable_path, headless=False)

    ### Eater
    url = 'https://twincities.eater.com/'

    browser.visit(url)
    html = browser.html
    soup = bs(html, 'html.parser')

    titles = soup.find_all("h2", class_="c-entry-box--compact__title")

    matches = ["Beer", "Brewery", "Breweries", "Wine", "Winery", "Wineries", "Growler", "Growlers", "Cocktail", "Cocktails", "Alcohol", "Bike", "Bikes", "Cycle", "Cyclist", "Cyclists", "Alcohol", "Liquor", "Bar", "Bars"]

    x = 0

    article_titles = []
    links = []

    for _ in titles:
        if any(y in titles[x].string for y in matches) == True:
            article_titles.append(titles[x].string)
            links.append(titles[x].find('a').get('href'))
            x = x + 1
        else:
            x = x + 1

    eater_content = {
        "article_titles": article_titles,
        "links": links
    }

    browser.quit()

    return eater_content