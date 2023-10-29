from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import deezforms_login as dl
from creds import email,password
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

profile = dict()

readme = 'markdown-body.entry-content.container-lg.f5'

def scrape_gh_prof(url):
    driver.get(url)

    profile_readme = driver.find_element(By.CSS_SELECTOR,f'article.{readme}')
    profile['gabout'] = profile_readme.text

    profile['gbio'] = driver.find_element(By.CLASS_NAME,'p-note.user-profile-bio.mb-3.js-user-profile-bio.f4').get_attribute('data-bio-text')

    # top 5 repos
    query = "?tab=repositories&q=&type=&language=&sort=stargazers"
    driver.get(f'{url}{query}')
    
    repos_list_id = 'user-repositories-list'
    repo_id= 'col-12.d-flex.flex-justify-between.width-full.py-4.border-bottom.color-border-muted.public.source'
    repos_list = driver.find_element(By.ID,repos_list_id)
    repos_title = repos_list.find_elements(By.CSS_SELECTOR,f'li.{repo_id}')

    profile['top_repos']= list()
    i=0
    for repo in repos_title:
        profile['top_repos'].append(repo.find_element(By.CSS_SELECTOR,f'h3.wb-break-all').text.split(' ')[0])
        i+=1
        if i == 5:
            break

    #total repos 
    anchor_elements = driver.find_elements(By.CLASS_NAME, 'UnderlineNav-item')
    second_anchor = anchor_elements[1]
    repos = second_anchor.find_element(By.CLASS_NAME,'Counter').text
    profile['total_repos'] = int(repos)

    return profile


