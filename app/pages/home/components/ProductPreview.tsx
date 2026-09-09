import { ArrowRight, Braces, Check, FileText, Sparkles, WandSparkles } from 'lucide-react';

type Props = { id: string };

/** Konten visual kecil di dlm product stage — satu varian per produk. */
export function ProductPreview({ id }: Props) {
	if (id === 'moozhaf') {
		return (
			<div className="preview quran-preview">
				<div className="preview-top">
					<span>Al-Fātiḥah</span>
					<span>01 / 07</span>
				</div>
				<div className="arabic">ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ</div>
				<p>All praise is for Allah—Lord of all worlds.</p>
				<div className="audio-line">
					<span className="play">▶</span>
					<i />
					<span>00:18</span>
				</div>
			</div>
		);
	}
	if (id === 'pica') {
		return (
			<div className="preview pica-preview">
				<div className="pica-label">Match the color</div>
				<div className="pica-row">
					<span className="shape sun">●</span>
					<span className="shape berry">▲</span>
					<span className="shape sky">■</span>
				</div>
				<div className="pica-score">
					<Sparkles size={17} /> Great match! <b>3 / 5</b>
				</div>
			</div>
		);
	}
	if (id === 'tolk') {
		return (
			<div className="preview tolk-preview">
				<div className="call-person">
					<span>JL</span>
					<div>
						<b>Jordan Lee</b>
						<small>Procurement Director · AI roleplay</small>
					</div>
					<i />
				</div>
				<div className="waveform">
					{Array.from({ length: 28 }).map((_, i) => (
						<i key={i} style={{ height: `${14 + ((i * 17) % 32)}px` }} />
					))}
				</div>
				<div className="feedback">
					<Check size={16} /> Clear proposal <span>Try “I recommend…”</span>
				</div>
			</div>
		);
	}
	if (id === 'toolhub') {
		return (
			<div className="preview tool-preview">
				<div className="tool-grid">
					<span>
						<FileText />
						PDF to text
					</span>
					<span>
						<Braces />
						JSON format
					</span>
					<span>
						<WandSparkles />
						Clean data
					</span>
					<span>
						<ArrowRight />
						More tools
					</span>
				</div>
				<div className="drop-zone">
					Drop a file here <small>Private, quick, browser-based</small>
				</div>
			</div>
		);
	}
	if (id === 'insidelab') {
		return (
			<div className="preview lab-preview">
				<div className="lab-bar">
					<span className="lab-dots">
						<i />
						<i />
						<i />
					</span>
					<span>latihan.js</span>
				</div>
				<div className="lab-code">
					<span className="lab-num">1</span>
					<code>const age = 20;</code>
				</div>
				<div className="lab-code">
					<span className="lab-num">2</span>
					<code>typeof age;</code>
				</div>
				<div className="lab-out">
					<small>Run</small>
					<b>「number」</b>
				</div>
			</div>
		);
	}
	return (
		<div className="preview writer-preview">
			<div className="writer-document">
				<small>Idea studio</small>
				<h4>Five angles for your next launch</h4>
				<span />
				<span />
				<span className="short" />
			</div>
			<div className="writer-command">
				<Sparkles size={15} /> Turn this title into a useful outline <ArrowRight size={15} />
			</div>
		</div>
	);
}
