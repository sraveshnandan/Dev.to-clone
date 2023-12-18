const Error = require("../utils/ErrorHandler");
const os = require("os");
const ErrorHandler = require("../utils/ErrorHandler");

exports.serverStatus = async (req, res) => {
  try {
    const newData = {
      host: os.hostname(),
      os_name: os.type(),
      arch_type: os.arch(),
      platform: os.platform(),
      version: os.release(),
      uptime: os.uptime(),
      cpu: os.cpus()[0],
      memory: Math.ceil(os.totalmem() / 1024 / 1024 / 1024) + "GB",
      free_memory: Math.ceil(os.freemem() / 1024 / 1024 / 1024) + "GB",
      network: os.networkInterfaces(),
    };
    res.status(200).json({
      success: true,
      machine_info: newData,
      message: "All Server Actions are Operational.",
    });
  } catch (error) {
    ErrorHandler(res, 500, error.message);
  }
};
