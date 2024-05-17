function calculateTime() {
    // Get the memory size and write speed
    const memorySize = $("#memorySize").val();
    const writeSpeed = $("#writeSpeed").val();

    // Convert gigabytes to megabytes
    const memorySizeMB = memorySize * 1024;

    // Calculate the time
    const time = memorySizeMB / writeSpeed;

    const result = new Date(time * 1000).toISOString().slice(11, 19);

    // Display the result
    $("#result").text(`It will take ${result} (hh:mm:ss) to fill the memory.`);
}