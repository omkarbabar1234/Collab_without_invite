let server = {
    name: "web-server-01",
    cpu: 85,
    memory: 72,
    disk: 91
};

function checkServer(server) {
    console.log("Checking:", server.name);

    if (server.cpu >= 80) {
        console.log("WARNING: High CPU");
    }

    if (server.memory >= 80) {
        console.log("WARNING: High memory");
    }

    if (server.disk >= 90) {
        console.log("CRITICAL: Disk space is running low");
    }
}

checkServer(server);