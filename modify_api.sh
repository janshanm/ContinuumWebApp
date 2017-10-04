#!/bin/bash

#To run this script do: ./modify_api.sh <new backend server api>

replace="s/localhost/$1/g;"
perl -pi -w -e "$replace" continuumAssessmentPlatform/**/**.js