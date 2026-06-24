from pydantic_settings import BaseSettings, SettingsConfigDict


class SecretKeys(BaseSettings):
    database_url: str
    client_url: str
    jwt_secret_key: str
    jwt_algorithm: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


secret_keys = SecretKeys()
