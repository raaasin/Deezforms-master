from selenium import webdriver
from creds import email,password
import deezforms_login as dl
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from deezforms_linkdin import scrape_li_prof
from deezforms_github import scrape_gh_prof
# print(scrape_li_prof('https://www.linkedin.com/in/sriharshamalla/'))

print(scrape_gh_prof('https://github.com/lokeshwarlakhi'))



