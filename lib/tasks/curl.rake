desc "curl"
task :curl do
	paths = [
		'/projects.json',
		'/institution_groups.json',
		'/institutions.json',
		'/sectors.json',
		'/subsidies.json',
	]
  paths.each do |path|
  `curl http://shiftthesubsidies.org/#{path}`
  end
end