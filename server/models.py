from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from config import db


class User(db.Model, SerializerMixin):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True)
    username = Column(String)
    # relationships
    call_logs = relationship("CallLog", backref="user")
    # serialize rules
    serialize_rules = ("-call_logs.user",)


class CallLog(db.Model, SerializerMixin):
    __tablename__ = "call_log"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    contact_name = Column(String)
    contact_number = Column(String)
    outcome = Column(String)
    notes = Column(String)
    # serialize rules
    serialize_rules = ("-user.call_logs",)
