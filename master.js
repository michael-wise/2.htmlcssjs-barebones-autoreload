console.log("Log to Console")

function AutoRefresh(t) {
	setTimeout("location.reload(true);", t);
}
AutoRefresh(1000)