import pymongo 
import certifi # Crea un certificado tls para tener acceso a la base de datos

URL = "mongodb+srv://root:root@cluster0.q32xd0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = pymongo.MongoClient(URL, tlsCAFile=certifi.where())

DB = client.get_database('task_manager') # Nombre de la base de datos

