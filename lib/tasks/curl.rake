desc "curl"
task :curl do
  paths.each do |path|  
  `curl #{path}`
  end
end