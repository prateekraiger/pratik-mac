import WindowsControls from "#components/WindowsControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowsControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>
      <div style={{ padding: "20px", backgroundColor: "white", height: "calc(100% - 40px)", overflow: "auto" }}>
        {data.image && <img src={data.image} alt={data.name} style={{ width: "200px", marginBottom: "20px", borderRadius: "8px" }} />}
        {data.subtitle && <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>{data.subtitle}</h3>}
        {data.description?.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: "12px", lineHeight: "1.6" }}>{paragraph}</p>
        ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
