desc "curl"
task :curl do
	paths = [
		'/projects.json',
		'/institution_groups.json',
		'/institutions.json',
		'/sectors.json',
		'/subsidies.json',
		'/admin/subsidies.json',
		'/admin/institutions.json',
		'/admin/entities.json',
		'/admin/sectors.json',
		'/admin/projects.json'
	]
  paths.each do |path|
  `curl http://shiftthesubsidies.org/#{path}`
  end
end