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
		url = 'http://shiftthesubsidies.org' + path
		puts `curl -sL -w "[%{http_code}] %{url_effective} - %{time_total}s\\n" #{url} -o /dev/null`
	end
end