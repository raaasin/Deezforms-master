from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import deezforms_login as dl
from creds import email,password
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import re 


full_name = 'text-heading-xlarge'
headline = 'text-body-medium'
contact_info = 'overlay/contact-info/'
links = 'pv-contact-info__contact-link'
headers = 'pv-contact-info__header.t-16.t-black.t-bold'
websites = 'pv-contact-info__contact-type.ci-websites'
twitter = 'pv-contact-info__contact-type.ci-twitter'

def modify_txt(text):
    modified_text = re.sub(r'\|\|', ',', text)
    modified_text = re.sub(r'\n', ' ', modified_text)
    return modified_text


profile = dict()
def scrape_li_prof(url):

    driver = webdriver.Chrome()
    dl.login(driver, email, password)

    if url[-1]=='/':
        time.sleep(1200)
        driver.get(f'{url}{contact_info}')
    else:
        # time.sleep(2)
        driver.get(f'{url}"/"{contact_info}')
    profile['full_name']=driver.find_element(By.CSS_SELECTOR,f"h1.{full_name}").get_attribute('innerText')
    profile['headline']=modify_txt(driver.find_element(By.CSS_SELECTOR, "div.text-body-medium").get_attribute("innerText"))
    
    urls = list()
    for element in driver.find_element(By.CSS_SELECTOR,f'section.{websites}').find_elements(By.CSS_SELECTOR,f'a.{links}'):
        urls.append(element.text)
    profile['websites']= urls

    urls.clear()
    for element in driver.find_element(By.CSS_SELECTOR,f'section.{twitter}').find_elements(By.CSS_SELECTOR,f'a.{links}'):
        urls.append(element.text)
    profile['twitter'] = urls[0] if len(urls) == 1 else urls

    while True:
        try:
        # Attempt to run the function
            profile['about'] = modify_txt(driver.find_element(By.CSS_SELECTOR,'div.display-flex.ph5.pv3').find_element(By.CSS_SELECTOR,'div.display-flex').find_element(By.CSS_SELECTOR,'div.pv-shared-text-with-see-more').find_element(By.CSS_SELECTOR,'div.inline-show-more-text').text)
            # If the function runs successfully, break out of the loop
            break
        except Exception as e:
            # Handle the error, you can log it or print it
            print(f"Please Wait....")
            # Sleep for a while before retrying
            time.sleep(2)

    return profile





    


    




