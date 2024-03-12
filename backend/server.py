from flask import Flask, request
from flask_cors import CORS
import json
from config import DB
from flask import abort
from bson.objectid import ObjectId

Api = Flask(__name__)
CORS(Api, resources={r"/*": {"origins": "*"}})


def fix_id(obj):
    obj['_id'] = str(obj['_id'])
    return obj

"""     
    user
        id
        email
        password
    task
        id
        id_user
        title
        task
        status
        date
"""
@Api.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = DB['user'].insert_one(data)
    return json.dumps(fix_id(data))

@Api.route('/api/users/login', methods=['POST'])
def get_user():
    user = request.get_json()
    print(user)
    data = DB['user'].find_one({"email": user['email'], "password": user['password']})
    if data is not None:
        return json.dumps(fix_id(data))
    else:
        abort(403)


@Api.route('/api/task', methods=['POST'])
def create_task():
    data = request.get_json()
    task = DB['task'].insert_one(data)
    return json.dumps(fix_id(task))

@Api.route('/api/tasks/<email>', methods=['GET'])
def get_tasks(email):
    cursor = DB['task'].find({"user_email": str(email), "status": "Pendiente"})
    data = []
    for task in cursor:
        data.append(fix_id(task))
    return json.dumps(data)

@Api.route('/api/task/<id>', methods=['POST'])
def update_task(id):
    data = request.get_json()
    data.pop('_id')
    task = DB['task'].update_one({'_id': ObjectId(str(id))}, {'$set': data})
    return json.dumps(id)

@Api.route('/api/task/<id>', methods=['DELETE'])
def delete_task(id):
    task = DB['task'].delete_one({'_id': ObjectId(id)})
    return json.dumps({'id': id})

