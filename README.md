# Json2Sql
[ ![Codeship Status for cullophid/json2sql](https://codeship.com/projects/0eb1d7d0-6294-0132-e881-5206a1a455eb/status?branch=master)](https://codeship.com/projects/52088)
[![Circle CI](https://circleci.com/gh/cullophid/json2sql.svg?style=svg)](https://circleci.com/gh/cullophid/json2sql)

Simple json query language that compiles to SQL. Removes much of the overhead when converting a json http request to an SQL query.

**This library provided no protection agains SQL injection!!!** This library should not be used unless you have a good knowlege of how to prevent sql injection attacks. Server requests should always be validated before being converted to a database query!!! 
