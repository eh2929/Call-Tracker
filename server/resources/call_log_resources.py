from flask import request
from flask_restful import Resource
from config import db
from models import CallLog


class CallLogListResource(Resource):
    def get(self):
        call_logs = CallLog.query.all()
        return [call_log.to_dict() for call_log in call_logs], 200

    def post(self):
        new_call_log = CallLog(
            user_id=request.json.get("user_id"),
            contact_name=request.json.get("contact_name"),
            contact_number=request.json.get("contact_number"),
            outcome=request.json.get("outcome"),
            notes=request.json.get("notes"),
        )
        db.session.add(new_call_log)
        db.session.commit()
        return new_call_log.to_dict(), 201


class CallLogResource(Resource):
    def get(self, call_log_id):
        call_log = CallLog.query.get(call_log_id)
        if call_log:
            return call_log.to_dict(), 200
        else:
            return {"error": "Call log not found"}, 404

    def patch(self, call_log_id):
        call_log = CallLog.query.get(call_log_id)
        if call_log:
            call_log.contact_name = request.json.get(
                "contact_name", call_log.contact_name
            )
            call_log.contact_number = request.json.get(
                "contact_number", call_log.contact_number
            )
            call_log.outcome = request.json.get("outcome", call_log.outcome)
            call_log.notes = request.json.get("notes", call_log.notes)
            db.session.commit()
            return call_log.to_dict(), 200
        else:
            return {"error": "Call log not found"}, 404

    def delete(self, call_log_id):
        call_log = CallLog.query.get(call_log_id)
        if call_log:
            db.session.delete(call_log)
            db.session.commit()
            return {"message": "Call log deleted"}, 200
        else:
            return {"error": "Call log not found"}, 404
