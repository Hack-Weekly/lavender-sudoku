#Sudoku


## Guide for setting up Development Environment

 1.  Install Python Virtual env

    apt install python3-env
   or 
  

     pip install virtualenv

2.Create  Virtual environment

> virtualenv <name>

>copy project folder in virtual environment or clone repo directly in virtual environment
 
3. Activate virtual environment
 #### Linux
>  source bin/activate
     
 #### Windows
> source script/activate

4. Install required packages
  
  >  pip install -r requirements.txt

5. create .env file in root directory and copy data from template.env file

6. make migrations and migrate
 > python manage.py makemigrations && python manage.py migrate

7. create superuser
> python manage.py createsuperuser

8. run server
> python manage.py runserver
```
<hr>













