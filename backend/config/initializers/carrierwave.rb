CarrierWave.configure do |config|
  if Rails.env.development?
    config.asset_host = 'http://localhost'
  end
end