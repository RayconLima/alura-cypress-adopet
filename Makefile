SHELL := /bin/bash
NVM_DIR := $(HOME)/.nvm

install:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npm ci

cypress-open:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npx cypress open

cypress-run:
	. "$(NVM_DIR)/nvm.sh" && nvm use && npx cypress run