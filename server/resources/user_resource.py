from flask import request
from flask_restful import Resource
from config import db
from models import User


class UserListResource(Resource):
    def get(self):
        users = User.query.all()
        return [user.to_dict() for user in users], 200

    def post(self):
        new_user = User(username=request.json["username"])
        db.session.add(new_user)
        db.session.commit()
        return new_user.to_dict(), 201


class UserResource(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if user:
            return user.to_dict(), 200
        else:
            return {"error": "User not found"}, 404

    def patch(self, user_id):
        user = User.query.get(user_id)
        if user:
            user.username = request.json.get("username", user.username)
            db.session.commit()
            return user.to_dict(), 200
        else:
            return {"error": "User not found"}, 404

    def delete(self, user_id):
        user = User.query.get(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return {"message": "User deleted"}, 200
        else:
            return {"error": "User not found"}, 404
