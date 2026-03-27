SHELL := /bin/bash
NVM_DIR := $(HOME)/.nvm

install:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npm ci

cypress-open:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npx cypress open

cypress-run:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npx cypress run

cypress-run-headless:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npx cypress run --headless

cypress-run-with-reporter:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npx cypress run --reporter mochawesome

cypress-recorder:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npx cypress run --record