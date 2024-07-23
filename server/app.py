from config import app, api
from resources.user_resource import UserListResource, UserResource
from resources.call_log_resources import CallLogListResource, CallLogResource


@app.route("/")
def index():
    return "<h1>Call Tracker API</h1>"


# Register resources
api.add_resource(UserListResource, "/users")
api.add_resource(UserResource, "/users/<int:user_id>")
api.add_resource(CallLogListResource, "/call_logs")
api.add_resource(CallLogResource, "/call_logs/<int:call_log_id>")

if __name__ == "__main__":
    app.run(port=5555, debug=True)
